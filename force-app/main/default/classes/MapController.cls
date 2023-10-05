/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 09-22-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class MapController {
    @AuraEnabled(cacheable=true)
    public  static Account getMap(Id recordId) {
      return [Select id, name, ShippingCity, ShippingStreet, ShippingState, ShippingCountry, ShippingPostalCode,BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry from 
      Account where Id=: recordId];  
    }
}