global with sharing class BatchApex2 implements Database.Batchable<sObject> {
    /* Create a batch class which would:
Create a Task to review opportunity for all the opportunities irrespective of their StageName.
Tasks should be assigned to the related Opportunity Owner and if the any of the Owner/User
 is inactive then assign the task to any user with profile System Administrator
*/
   
global Database.QueryLocator start(Database.BatchableContext bc){
    String query='Select id, name, stageName, OwnerID, Owner.isActive from Opportunity';
    return Database.getQueryLocator(query);
}
global void execute(Database.BatchableContext bc, List<Opportunity> scope){
    List<Task> taskToAdded= new List<Task>();
    User adminUser=[select id from User where Profile.Name='System Administrator' LIMIT 1];

    for(Opportunity opp:scope){
        if (opp.Owner.isActive) {
            Task t= new Task();
            t.WhatId=opp.Id;
            t.OwnerId=opp.OwnerId;
            t.Subject= 'Please review opportunity';
            taskToAdded.add(t);
            
        }
        else{
            Task t= new Task();
            t.WhatId=opp.Id;
            t.OwnerId=adminUser.Id;
            t.Subject= 'Please review opportunity';
            taskToAdded.add(t);

        }
    }
    insert taskToAdded;
}
global void finish(Database.BatchableContext bc) {
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