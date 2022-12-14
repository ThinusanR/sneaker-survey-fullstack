package survey.controller;

// import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import survey.model.Survey;
import survey.repository.SurveyRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1")
public class SurveyController {
  @Autowired
  SurveyRepository surveyRepository;

  @PostMapping("/surveys")
  public ResponseEntity<Survey> addSurvey(@RequestBody Survey newSurvey){
    try{
      Survey survey = surveyRepository.save(new Survey(newSurvey.getFirstName(),newSurvey.getLastName(), newSurvey.getEmail(), newSurvey.getAge(), newSurvey.getGender(),newSurvey.getShoeSize(),newSurvey.getFavouriteBrands(),newSurvey.getBuyingPreference(),newSurvey.getShoppingPreference(), newSurvey.getFavouriteSneaker(), newSurvey.getCreatedAt()));
      return new ResponseEntity<>(survey, HttpStatus.CREATED);
    }
    catch (Exception e){
      System.out.println(e);
      return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}
