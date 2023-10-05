public class Queu implements queueable  {
    public void execute(QueueableContext Q){
       // Delete [SELECT id,name from Student__c];
         Undelete [Select id from Student__c where isDeleted= true LIMIT 1000 ALL ROWS];
        
         System.enqueueJob(new Queu2());
        
        
    }

}