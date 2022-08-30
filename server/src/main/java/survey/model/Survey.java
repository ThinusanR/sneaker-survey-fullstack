package survey.model;
// import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("survey")
public class Survey {
  enum Gender {
    MALE, FEMALE, OTHER
  }
  enum BuyPreference {
    ONLINE, INSTORE, BOTH
  }
 
  @Id
  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private Integer age;
  private Gender gender;
  private String shoeSize;
  private List<String> favouriteBrands = new ArrayList<String>();
  private BuyPreference buyingPreference;
  private List<String> shoppingPreference = new ArrayList<String>();
  private String favouriteSneaker;
  private String createdAt;
  
  public Survey() {
  }

  public Survey( String firstName, String lastName, String email, Integer age, Gender gender, String shoeSize, List<String> favouriteBrands, BuyPreference buyingPreference, List<String> shoppingPreference, String favouriteSneaker, String createdAt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email= email;
    this.age = age;
    this.gender = gender;
    this.shoeSize = shoeSize;
    this.favouriteBrands = favouriteBrands;
    this.buyingPreference = buyingPreference;
    this.shoppingPreference = shoppingPreference;
    this.favouriteSneaker = favouriteSneaker;
    this.createdAt = createdAt;
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
  public String getEmail(){
    return email;
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
  public BuyPreference getBuyingPreference(){
    return buyingPreference;
  }
  public List<String> getShoppingPreference(){
    return shoppingPreference;
  }
  public String getFavouriteSneaker(){
    return favouriteSneaker;
  }
  public String getCreatedAt(){
    return createdAt;
  }
  public void setFirstName(String firstName){
    this.firstName = firstName;
  }
  public void setLastName(String lastName){
    this.lastName = lastName;
  }
  public void setEmail(String email){
    this.email = email;
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
  public void setBuyingPreference(BuyPreference buyingPreference){
    this.buyingPreference = buyingPreference;
  }
  public void setShoppingPreference(List<String> shoppingPreference){
    this.shoppingPreference = shoppingPreference;
  }
  public void setFavouriteSneaker(String favouriteSneaker){
    this.favouriteSneaker = favouriteSneaker;
  }
  public void setCreatedAt(String createdAt){
    this.createdAt = createdAt;
  }
 

}
