# Apple-JS-Calculator
Analog of the iPhone calculator written in pure JS.
<img width="1920" alt="Screenshot 2024-02-11 at 10 21 33 PM" src="https://github.com/FrakesH/Apple-JS-Calculator/assets/104097126/3ebf1f33-34df-45a5-b5cf-1b845ca1ab90">

The functions of rounding, increasing in degree at line overflow, formatting in the form 123,456,789, as well as basic functions of multiplication division addition and subtraction are implemented. Added a system of percentages as in the calculator from Apple (I still do not understand why it is needed), and the function of changing signs +-. Tried to eliminate all the bugs. From the remaining - it is necessary to realize adequate conditions for rounding numbers after the point ( now they round to 1 character ),  and if possible implement styles and their definition in JS for numbers (such as 111,111,111,111 and 999,999,999,999, for each of them we need different styles (such a need is caused by fonts)). I do not vouch for the work of styles on Windows/Linux as the calculator was originally created on macOS. I hope someone will need it or it will be a good source. :)
Right away I want to say I didn't do the Apple feature with the AC to C change, personally I find it wildly annoying, so I didn't do it.



Аналог калькутора айфона написанный на чистом JS.

Реализованы функции округления, возведения в степень при переполнении строки, форматирования в виде 123,456,789, а также базовые функции умножения деления сложения и вычитания. Добавлена система процентов, как в калькуляторе от Apple (до сих пор не понимаю, зачем она нужна), и функция смены знаков +-. Постарался устранить все баги. Из оставшегося - необходимо реализовать адекватные условия для округления чисел после точки (сейчас они округляются до 1 знака), и по возможности реализовать стили и их определние в JS для чисел (таких как 111,111,111 и 999,999,999, для каждого из них нужны разные стили (такая необходимость вызвана шрифтами)). За работу стилей на Windows/Linux не ручаюсь, так как калькулятор изначально создавался на macOS. Надеюсь, кому-то пригодится или будет хорошим источником)
