trigger AccountChnage on Account (before update ) {
    
    if(trigger.isUpdate){
        TriggerHandler.method1(trigger.oldMap,trigger.newMap);
        
    }

}