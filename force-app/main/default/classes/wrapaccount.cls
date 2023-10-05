public class wrapaccount{

 

    public list<contact> acc{get;set;}
    public list<contact> acclist{get;set;}
    public list<wrap> ww{get;set;}
    public wrapaccount(){
        acc=new list<contact>();
        acc=[select id, name, email, phone from contact  ];
        ww=new list<wrap>();
        acclist=new list<contact>();
        for(contact f: acc){
            
         ww.add(new wrap(f));   
            
        }
        
    }
    
    public class wrap{
        public contact a{get;set;}
        public boolean b{get;set;}
        
        public wrap(contact d){
            b=false;
            a=d;
            
        }
        }
        
        public void selected (){
        acclist.clear();
        for(wrap h: ww){
        
        if(h.b == true){
        acclist.add(h.a);
        }
        
        
        }
   
}

   public pagereference cancel() {
       pagereference pr= new pagereference('/001/o');
       return pr;
    }

}