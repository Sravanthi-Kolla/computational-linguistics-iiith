var sen1=["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"]	
var sen2=["some students like to study in the night","at night some students like to study"]
var sen3=["John and Mary went to church","Mary and John went to church"]
var sen4=["John went to church after eating","after eating John went to church","John after eating went to church"]
var sen5=["did he go to market","he did go to market"]
var sen6=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
var sen7=["John goes to the library and studies","John studies and goes to the library"]
var sen8=["John ate an apple so did she","she ate an apple so did John"]
var sen9=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
var sen10=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her",	"yesterday I bought a book that I told her"]
var alleng=["John ate an apple before afternoon","John goes to the library and studies","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var s1=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"]
var s2=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
var s3=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"]
var s4=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"]
var s5=["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"]
var s6=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"]
var s7=["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
var allhin=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]


function goal2()
{
	document.getElementById("fix3").innerHTML=""
if(document.getElementById("eng").selected)
{
	document.getElementById("fix").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("fix1").innerHTML="(select the buttons in proper order)";
	var a=alleng[Math.floor(Math.random() * alleng.length)];
	let body = document.getElementsByTagName("p")[3];
	a1=a.split(" ");
	for(i=0;i<a1.length;i++)
{
	j=Math.floor(Math.random()*a1.length)
	a=a1[i];
	a1[i]=a1[j]
	a1[j]=a;
}
for(i=0;i<a1.length;i++)
{
		 let button = document.createElement("button");
  button.innerHTML = a1[i]
  body.appendChild(button)
}
}
else if (document.getElementById("hin").selected) 
{ 
	document.getElementById("fix3").innerHTML=""

	document.getElementById("fix").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("fix1").innerHTML="(select the buttons in proper order)";
	var b=allhin[Math.floor(Math.random() * allhin.length)];
            b1=b.split(" ");
	let body = document.getElementsByTagName("p")[3];
	for(i=0;i<b1.length;i++)
{
	
	j=Math.floor(Math.random()*b1.length)
	a=b1[i];
	b1[i]=b1[j]
	b1[j]=a;

}

for(i=0;i<b1.length;i++)
{
	
		 let button = document.createElement("button");
  button.innerHTML = b1[i]
  body.appendChild(button)
}
}

else
{
	document.getElementById("fix").innerHTML=""
	document.getElementById("fix1").innerHTML=""
	document.getElementById("fix3").innerHTML=""
}
}



	


