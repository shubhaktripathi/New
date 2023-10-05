public class MaySobject {
    public void mayExp(){
        Student__c std=new Student__c(); // allocates memory
        //Student__c std;
        System.debug('student variable '+ std);
        std.name='Shubham'; // assign value
        std.Gender__c='Male';
        std.marks__c=160;  
        Student__c s1=std;  // reference Object
        Student__c s2= s1;
        s1.name='Ravi';
        std.name='Raj';
        System.debug(s1.Name);
        System.debug(s2.Name);
        System.debug(std.Name);
    }
    
}