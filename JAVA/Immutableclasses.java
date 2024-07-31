
public class Immutableclasses {
    
    private final String str;
    Immutableclasses(final String s){
         str=s;
    }

    public final String getName(){
        return str;
    }
    public static void main(String[] args) {
       
        Immutableclasses obj=new Immutableclasses("himanshu 14lpa base in bang 13july");
        
      
        System.out.println(obj.getName());  //output :himanshu 14lpa base in bang 13july
         
        //obj.str="ihdfs"  it will give an error as we used final and made everything immutablel
        
    }
}
