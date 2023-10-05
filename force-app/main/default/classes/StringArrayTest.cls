public class StringArrayTest {
    public static List<string> generateStringArray(Integer l){
        
       	List<string> str= new List<String>();
        for(integer i =0 ; i<l;i++){
            str.add('Test '+i);
                       System.debug(str[i]);

        }
        system.debug(str);
        
        return str;
        
        
    }

}