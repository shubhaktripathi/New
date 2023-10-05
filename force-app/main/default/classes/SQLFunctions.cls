public class SQLFunctions {

    public void myMethod(){
        List<Opportunity> opp= new List<Opportunity>();
        AggregateResult ar1= [SELECT Sum(Amount) from Opportunity];
        system.debug(ar1);
        
        List<Student__c> std= new List<student__c>();
        AggregateResult c= [select count(name) from Student__c];
        system.debug(c);
        integer ci= [select count() from Student__c];
        system.debug(c);
        
    }
    
    
    public void sqlFunction(){
        //*****IN
        List<String> newList= new List<string>{'Tanya', 'Ravish', 'Shubham'};
        List<Student__c> st2=  [select name, RollNo__c from Student__c where name IN:newList];
        for(Student__C sf:st2){
            system.debug(sf);
        }
        
        //*****LIKE
        
        List<Student__c> st3=  [select name, RollNo__c from Student__c where name like'Shubh%'];
        system.debug(st3);
        
        //***** ORDER BY
        
        List<Student__c> st4=  [select name, RollNo__c from Student__c Order By Name  desc];
          for(Student__C sf:st4){
            system.debug(sf);
        }
        
        //*****LIMIT
        List<Student__c> st5=  [select name, RollNo__c from Student__c limit 4];
        for(Student__C sf:st5){
            system.debug(sf);
        }
        
        
        
        
        
    }
}