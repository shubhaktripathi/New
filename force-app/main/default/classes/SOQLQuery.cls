public class SOQLQuery
{

    public void query()
    {
        
       List<Student__c> li = new List<Student__C>();
       li= [select name,id from Student__c];
       system.debug(li);
        
        /***** for each loop ********/
        
        for(Student__c sc:li){
            
            sc.name= 'Mr.'+sc.name;
            system.debug(sc.name);
        }
        
        List<Contact> con=  new  List<contact>();
        string val= 'shubham';
        //con= [select name, phone from contact where Account=:val];
        con= [select name, phone from contact where name=:val];
        system.debug(con);
        
        List<Custom__c> c=[SELECT id,Name,Amount__c,Description__c , Account__r.name,Account__r.phone from Custom__c where id='a085g000004Goa0AAC'];
        // to get 18 digit id
        List<Custom__c> d=[SELECT id,Name,Amount__c,Description__c,Account__r.name,Contact__r.LastName,Order_Number__c ,Tracking_Number__c from Custom__c where name='Shubham'];
        system.debug(d); //a085g000004GoaAAAS
        List<Custom__c> e=[SELECT id,Name,Amount__c,Description__c,Account__r.name,Contact__r.LastName,contact__r.phone,Order_Number__c ,Tracking_Number__c from Custom__c where id='a085g000004GoaAAAS'];
        for( Custom__c cs:e){
            system.debug(cs);
             }
        
        List<Custom__c> df= [select Account__r.name , contact__r.title from Custom__c where id='a085g000004GoaAAAS'];
        system.debug(df);
        
        list<case> ef= [select Account.name , contact.title from case where casenumber='00001385'];
        
            system.debug(ef);
             
 
    }
}