var name_of_the_student_array= [];
var display_name_array= [];

function submit(){
for(var v=1;v<=4;v++){
    var name_of_the_student= document.getElementById("name_of_the_student_"+v).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);
}
var length_of_the_array= name_of_the_student_array.length;
console.log(length_of_the_array);
for( var y=0;y<length_of_the_array;y++){
    display_name_array.push("<h4> name-"+name_of_the_student_array[y]+"</h4>");
    console.log(display_name_array);
    
    
}
document.getElementById("display_name_with_commas").innerHTML=display_name_array;
var remove_commas= display_name_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_name_with_sort= [];
    var length_of_the_array= name_of_the_student_array.length;
console.log(length_of_the_array);
for(var s=0;s<length_of_the_array;s++){
    display_name_with_sort.push("<h4> name-"+name_of_the_student_array[s]+"</h4>");
    console.log(display_name_with_sort);
}
document.getElementById("display_name_with_commas").innerHTML=display_name_with_sort;
var remove_commas= display_name_with_sort.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }