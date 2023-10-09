trigger ClosedOpportunityTrigger on Opportunity  (after insert , after update ){
       List <Task> tasks = new List<Task>();
    for(Opportunity opp : [SELECT Id, StageName FROM Opportunity WHERE StageName='Closed Won' 
                           AND Id IN :Trigger.new]){
        tasks.add(new Task(Subject = 'Follow Up Test Task' , WhatId = opp.Id));
    }
    
    if(tasks.size() > 0){
        insert tasks;
    }
}