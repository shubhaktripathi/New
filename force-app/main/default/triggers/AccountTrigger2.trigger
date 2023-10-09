trigger AccountTrigger2 on Account (After insert, After Update) {
//Write a trigger, to create new Opportunity whenever an account is created/updated
// for Industry – Agriculture.
//Opportunity should be set as below:
//Stage = ‘Prospecting’, Amount = $0, CloseDate = ’90 days from today’.
if(trigger.isAfter && trigger.isInsert){
    List<opportunity> oppList = new List<opportunity>();
    for(Account Acc:Trigger.new){
        if(Acc.Industry=='Agriculture'){
            Opportunity opp= new Opportunity();
            opp.AccountId=Acc.Id;
            opp.Name=Acc.Name+'opp';
            opp.StageName='Working';
            opp.CloseDate=System.today()+90;
            oppList.add(opp);
        }
        insert oppList;
    }
}
if(trigger.isAfter && trigger.isUpdate){
    List<opportunity> oppList1 = new List<opportunity>();
    for(Account Acc:trigger.new){
        if((trigger.newMap.get(Acc.Id).Industry!=trigger.oldMap.get(Acc.Id).Industry) && 
            Acc.Industry=='Agriculture'){
            Opportunity opp= new Opportunity();
            opp.AccountId=Acc.Id;
            opp.Name=Acc.Name+'opp';
            opp.StageName='Working';
            opp.CloseDate=System.today()+90;
            oppList1.add(opp);      
        }
    }
    insert oppList1;
    }

    
}