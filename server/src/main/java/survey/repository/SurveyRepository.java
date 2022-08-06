package survey.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import survey.model.Survey;

public interface SurveyRepository extends MongoRepository<Survey, String> {
  
}
