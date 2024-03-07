def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def print_primes_up_to_n(n):
    primes = [num for num in range(2, n+1) if is_prime(num)]
    print("Bilangan prima dari 1 hingga", n, "adalah:", primes)

def print_numbers_with_replacements(n):
    for num in range(1, n+1):
        if num % 3 == 0 and num % 4 == 0:
            print("OKYES", end=" ")
        elif num % 3 == 0:
            print("OK", end=" ")
        elif num % 4 == 0:
            print("YES", end=" ")
        else:
            print(num, end=" ")

n = int(input("Masukkan nilai n: "))

print_numbers_with_replacements(n)
