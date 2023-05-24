package survey.controller;

// import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import survey.model.Survey;
import survey.repository.SurveyRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1")
public class SurveyController {
  @Autowired private SurveyRepository surveyRepository;

  @Autowired
  private MongoTemplate mongoTemplate;
  
  
  @PostMapping("/surveys")
  public ResponseEntity<Survey> addSurvey(@RequestBody Survey newSurvey){
    try{
      Survey survey = surveyRepository.save(new Survey(newSurvey.getFirstName(),newSurvey.getLastName(), newSurvey.getEmail(), newSurvey.getAge(), newSurvey.getGender(),newSurvey.getShoeSize(),newSurvey.getFavouriteBrands(),newSurvey.getBuyingPreference(), newSurvey.getNumOfShoes(), newSurvey.getMaxPay(),newSurvey.getShoppingPreference(), newSurvey.getFavouriteSneaker(), newSurvey.getCreatedAt()));
      return new ResponseEntity<>(survey, HttpStatus.CREATED);
    }
    catch (Exception e){
      System.out.println(e);
      return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/surveys/data")
  public ResponseEntity<Object> getSurveyData(){
    try{
      Query query = new Query();
      query.fields()
      .exclude("_id")
      .exclude("firstName")
      .exclude("lastName")
      .exclude("email");
      List<Survey> list = mongoTemplate.find(query, Survey.class);

      if(list == null){
        return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
      }

     return new ResponseEntity<>(list, HttpStatus.OK);
    }
    catch (Exception e){
      System.out.println(e);
      return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }
  
}
