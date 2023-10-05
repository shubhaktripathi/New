global class BatchClass implements  Database.Batchable<sObject> {
    
    global Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator([select name,id from Student__c]);
        
        
    }
    
    global void execute(Database.BatchableContext bc, List<Student__c> stud){
        List<Student__c> st= new List<Student__c>();
        for(Student__c s:stud){
           s.name= 'hey '+ s.name;
           st.add(s);
        }
        update st;
        
        
    }
    
    
    global void finish(Database.batchableContext bc){
        system.debug('Job is finished');
        
        
        
    }
    
}
/*Invoking Btach Class
BatchClass bc= new BatchClass();
Id batchId= Database.executeBatch(bc, 10);
List<AsyncApexJob> job= [Select Id, Status, JobItemsProcessed, 
                  TotalJobItems, NumberOfErrors 
                  From AsyncApexJob where Id= :batchId
    			  LIMIT 1];
*/