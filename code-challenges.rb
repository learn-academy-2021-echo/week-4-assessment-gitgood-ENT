# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
def is_odd(number)
    if number.odd? 
        "#{number} is odd"
    elsif number.even?
        "#{number} is even"
    end
end

p is_odd(num1)
p is_odd(num2)
p is_odd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#couldn't get .delete to take regex as an input 
# def remove_vowels(string)
#     string.gsub(/[aeiou]/, '')
# end
# # but found out it takes a simpler input than regex?
# p remove_vowels album1
# p album1.delete "aeiou"

def remove_vowels string
    string.delete "aeiou"
end
p remove_vowels(album1)
p remove_vowels(album2)
p remove_vowels(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# def is_palindrome string
#     if string.downcase == string.downcase.reverse 
#         "#{string} is a palindrome"
#     else 
#         "#{string} is not a palindrome"
#     end
# end

# searched for a way to compare two strings case insensitively
def is_palindrome string
    if string.casecmp?(string.reverse)
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end



p is_palindrome is_palindrome1
p is_palindrome is_palindrome2
p is_palindrome is_palindrome3

# if string.casecmp(string.reverse) == 0
# if string.casecmp(string.reverse).zero?
# and
# if string.casecmp?(string.reverse)
# are all the same thing...