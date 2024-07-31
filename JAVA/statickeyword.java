
 class statickeywords{

    public int a;
    final int bb=2;
    static char b='a';

    static void display(){
        //can only access static variables
        System.out.println(b);
    }
}


public class statickeyword {
    public static void main(String[] args) {
        //static variables should be declared within the class body, not inside methods
        //cannot declare static var here
        statickeywords s=new statickeywords();
        System.out.println(s.bb);
        statickeywords.display();

    } 
}
