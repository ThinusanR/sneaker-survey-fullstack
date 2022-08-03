package survey;

// import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/survey")
public class SurveyController {

  @GetMapping
  public List<Survey> hello() {
    List<String> brands = List.of("jordan", "puma");
    Survey surveyOne = new Survey(
        "ege4324",
        "John",
        "bob",
        26,
        Gender.MALE,
        "11",
        brands,
        "online",
        "retailer",
        "Bred toe jordan 1"
        );

    return List.of(surveyOne);
  }
  
}
