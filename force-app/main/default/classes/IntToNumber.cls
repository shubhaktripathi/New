public class IntToNumber {
    
    public  void intToString(decimal num){
           Decimal Num1=num;
           String str=String.valueOf(Num1);  
           system.debug(str.length());
                if(str.length()<=6){
                     String str1 = String.valueOf(Decimal.valueOf(str).divide(1000,3));
                        String str2= '$'+ str1+ ' M';
                        system.debug(str2);
                }
                else{ 
                     String str3 = String.valueOf(Decimal.valueOf(str).divide(1000000,3));
                     String str4=('$'+str3+' MM');
                     system.debug(str4);
                    
                }
        
        
        /* Decimal myInt2 = Decimal.valueOf(str);
                       Decimal myInt3= myInt2.divide(1000,3);
                       String str3=String.valueOf(myInt3);
                        system.debug(myInt3);  
                        system.debug(str3);
                        system.debug('$'+str3+' M');*/
        
        
          /* Decimal myInt = Decimal.valueOf(str);
                    Decimal myInt1= myInt.divide(1000000,3);
                    String str1=String.valueOf(myInt1);*/
    }

}