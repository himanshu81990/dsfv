import java.util.ArrayDeque;


public class LearnArrayDequeue {
    public static void main(String[] args) {
        
        ArrayDeque<Integer>q=new ArrayDeque<>();

        q.offer(21);
        q.offerFirst(12);
        q.offerLast(14);
        q.offer(28);
        System.out.println(q);

        System.out.println(q.peek());
        System.out.println(q.peekFirst());
        System.out.println(q.peekLast());

        System.out.println(q.poll());
        System.out.println(q.pollFirst());
        System.out.println(q.pollLast());
    }
}
