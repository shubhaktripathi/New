public class ContactSearch {
public static List<contact> searchForContacts(String a, string b){
  
    List<contact> con=[select id, name from contact where (lastname=:a AND MailingPostalCode=:b)];
    return con;
}
}