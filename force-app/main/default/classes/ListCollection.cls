public class ListCollection {
    /*
1. Ordered Elements
2. I allows duplicate
3. It has a index value 
4. Index value starts with 0
5. Primitive types, collection, sobject
6. List can accept nested and multidimensional elements

Declaration- 
List<String> listname=new list<String>();
List<integer> listname=new list<integer>();
List<Account> listname=new list<account>();
List<Account> listname=[Select id , name from account];

Method in list: 
add(element);
add(index, listElement);
addall(fromlist);
addall(from set);
equals(listsecond);
contains(listelements);
cone();
clear();
get(index);
indexof();
isEmpty();
remove();
sort();
size();
set(index,listelement);
*/

    public static void myList(){
        List<String> my_list = new List<String>();
      //Add Method
        my_list.add('Shubham');
        my_list.add('Rohit');
       // my_list[1]='Rohit';
        system.debug('my_list is '+my_list);
        
        Integer[] l = new List<Integer>();
		l.add(1);
		system.debug('L is'+l);  
        
        List<String> my_list2= new List<String>{'Anjali','abhishek'};
        system.debug(my_list2);
        
        // addAll method
        List<String> my_list3 = new List<String>();
        my_list3.addall(my_list);
        system.debug('my_list3 '+my_list3);
        
        system.debug(my_list.equals(my_list3));
        my_list.add(1,'Ajay');
        system.debug('updated list is'+my_list);
        
        //remove method
        my_list3.remove(1);
        system.debug(my_list3);
        
        system.debug(my_list3.size());
        my_list3.clear();
        system.debug(my_list3);
        
        //clone Method
        List<string> my_list4  = my_list.clone();
        system.debug(my_list4);
        
        
        //equlas Method
       system.debug(my_list4.equals(my_list));
        
        //get Method
        system.debug(my_list.get(1));
        
        Sobject obj = [Select id , name from Account LIMIT 1];
        system.debug(obj.getSobjectType());
        
        //indexof Method
       system.debug(my_list.indexOf('Ajay'));
        
        //isEmpty Method
       system.debug(my_list.isEmpty());
       
       // my_list2.set(2,'Shivam');
        

}
}