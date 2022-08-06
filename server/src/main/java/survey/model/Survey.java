package survey.model;
// import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// import survey.Gender;

@Document("survey")
public class Survey {
 
  @Id
  private String id;
  private String firstName;
  private String lastName;
  private Integer age;
  private Gender gender;
  private String shoeSize;
  private List<String> favouriteBrands = new ArrayList<String>();
  private String buyingPreference;
  private String shoppingPreference;
  private String favouriteSneaker;
  // private LocalDateTime createdAt;
  
  public Survey() {
  }

  public Survey( String firstName, String lastName, Integer age, Gender gender, String shoeSize, List<String> favouriteBrands, String buyingPreference, String shoppingPreference, String favouriteSneaker) {
    // this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.shoeSize = shoeSize;
    this.favouriteBrands = favouriteBrands;
    this.buyingPreference = buyingPreference;
    this.shoppingPreference = shoppingPreference;
    this.favouriteSneaker = favouriteSneaker;
    // this.createdAt = createdAt;
  }
  public String getId(){
    return id;
  }
  public String getFirstName(){
    return firstName;
  }
  public String getLastName(){
    return lastName;
  }
  public Integer getAge(){
    return age;
  }
  public Gender getGender(){
    return gender;
  }
  public String getShoeSize(){
    return shoeSize;
  }
  public List<String> getFavouriteBrands(){
    return favouriteBrands;
  }
  public String getBuyingPreference(){
    return buyingPreference;
  }
  public String getShoppingPreference(){
    return shoppingPreference;
  }
  public String getFavouriteSneaker(){
    return favouriteSneaker;
  }
  public void setFirstName(String firstName){
    this.firstName = firstName;
  }
  public void setLastName(String lastName){
    this.lastName = lastName;
  }
  public void setAge(Integer age){
    this.age = age;
  }
  public void setGender(Gender gender){
    this.gender = gender;
  }
  public void setShoeSize(String shoeSize){
    this.shoeSize = shoeSize;
  }
  public void setFavouriteBrands(List<String> favouriteBrands){
    this.favouriteBrands = favouriteBrands;
  }
  public void setBuyingPreference(String buyingPreference){
    this.buyingPreference = buyingPreference;
  }
  public void setShoppingPreference(String shoppingPreference){
    this.shoppingPreference = shoppingPreference;
  }
  public void setFavouriteSneaker(String favouriteSneaker){
    this.favouriteSneaker = favouriteSneaker;
  }
 

}
