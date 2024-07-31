abstract class Car {

    abstract void run();

}

class gwagon extends Car {
    public void run() {
        System.out.println("running");
    }
}

public class abstractclas {
    public static void main(String[] args) {
        gwagon g = new gwagon();
        g.run();
    }
}
