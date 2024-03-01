using System;

class Program {
  public static void Main(string[] args) {
    Console.WriteLine("Hello World");
    problem1();
    problem2();
    problem3();
  }

  private static void problem1() {
    double circumference = 19.0;
    double radius = circumference / (2 * 3.14);
    Console.WriteLine(radius);
  }

  private static void problem2() {
    for (int i = 1; i <= 99; i++) {
        if (i % 8 == 0) {
            Console.WriteLine(" ");
        } else {
            Console.WriteLine(i);
        }
    }
  }

  private static void problem3() {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
        double average = numbers.Average();
        Console.WriteLine($"The average is: {average}");
  }

}