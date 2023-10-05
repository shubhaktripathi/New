global with sharing class ScheduleBatchApex1 implements Schedulable {
  global void execute( SchedulableContext sc){
    BatchApex1 b= new BatchApex1();
    Database.executeBatch(b);
  }

}