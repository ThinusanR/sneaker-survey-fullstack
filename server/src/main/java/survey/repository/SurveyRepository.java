package survey.repository;

import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import survey.model.Survey;
import java.util.List;
public interface SurveyRepository extends MongoRepository<Survey, String> {
  // List<Survey> findAll(Query query);
  
}
