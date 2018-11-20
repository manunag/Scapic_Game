function myfun(){

        if( typeof myfun.start == 'undefined' )
        {
            myfun.start = 1000;
            var x = document.getElementById("nostart");
            x.style.display = "none";
            var y=document.getElementById("started");
            y.style.display="block";
            document.getElementById("start").innerHTML =myfun.start;
        }
        
    
        if(myfun.start>=100)
            {
                myfun.start=myfun.start-100;
                var a=Math.floor(Math.random() * 10);
                document.getElementById("one").innerHTML =a;
                var b=Math.floor(Math.random() * 10);
                document.getElementById("two").innerHTML =b;
                var c=Math.floor(Math.random() * 10);
                document.getElementById("three").innerHTML =c;

                
                if((a+b+c)/3==a || (a+b+c)/3==b || (a+b+c)/3==c)
                {
                    if(a-1==b || a+1==b || a-1==c || a+1==c)
                    {
                        myfun.start=myfun.start+800;
                        document.getElementById("lk").innerHTML ="You were lucky this time, you got 800 INR as all the numbers have difference 1 ";
                    }
                }
                else if(a==b && a==c)
                {
                    myfun.start=myfun.start+1000;
                    document.getElementById("lk").innerHTML ="You were lucky this time, you got 1000 INR as all the numbers are same";
                    
                }
                else if(a%2==0 && b%2==0 &&c%2==0)
                {
                    myfun.start=myfun.start+300;
                    document.getElementById("lk").innerHTML ="You were lucky this time, you got 300 INR as all the numbers are even";
                } 
                else if(a%2!=0 && b%2!=0 &&c%2!=0)
                {
                    myfun.start=myfun.start+300;
                    document.getElementById("lk").innerHTML ="You were lucky this time, you got 300 INR as all the numbers are odd";
                    
                }
                else
                {
                     document.getElementById("lk").innerHTML ="You are not lucky";
                    
                }
                document.getElementById("start").innerHTML =myfun.start;      
            }
    
        else
            {
                document.getElementById("over").innerHTML ="Game Over";
            }
        
    }