public class SQLRelationship {

    public void relatonship(){
        
        //************ Child to Parent
        
       		//************ Standard Object
       		
        	List<contact>  conList= [select lastname, firstname, Account.name from contact];
       		 // where Account is the parent object's reference which is relationship field's  name on child object
        	
       
        	//*********** Custom Object
        	
        	//List<Student__C> st= [select name, Parent__r.Email__c, Parent__r.Phone__c from Student__c];
        	// where Parent__r is the parent object's reference which is relationship field's name of child object
        	
        //*************** Parent To Child
        
        //************ Standard Object
       		
        	//List<Account>  AccList= [select name, (select lastname, phone  from Contacts) from Account];
        	 List<Contact>  CaseList= [select LastName, (select Status, Subject  from Cases) from Contact];
    //        SELECT name,Course__r.Net_Fees__c , course__r.name from Department__c where name='CS'

					 // where Contacts/ cases are child relationship name         
    
    //*********** Custom Object
        	
        	//List<Parent__c> pt= [select name,Email__c,Phone__c, (select Name, CourseFees__c,Gender__c from Students__r) from Parent__c];
        	// where Students__r is the child child relationship name
            
          //select name, (SELECT name from Departments__r) from Course__c where name='B.tech'
    
    }
    
}