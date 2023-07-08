let arr=[]
let arr1=[]
for(let x1=1;x1<=15;x1++){
    arr.push(Math.floor((Math.random() * 10) + 1)*5)
}

for(let x1=1;x1<=15;x1++){
    arr1.push('#' + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6))
}

let a1=1
let b1=document.querySelector("#one")
let b2=document.querySelector("#two")
let b3=document.querySelector("#three")
let b4=document.querySelector("#four")
let b5=document.querySelector("#six")
b1.addEventListener('click',()=>{
    a1=1
    console.log('click')
    let y1=document.querySelector("#tr")
    y1.innerHTML="Apply Bubble sort"
})
b2.addEventListener('click',()=>{
    a1=2
    console.log('click')
    let y1=document.querySelector("#tr")
    y1.innerHTML="Apply Quick sort"
})
b3.addEventListener('click',()=>{
    a1=3
    console.log('click')
    let y1=document.querySelector("#tr")
    y1.innerHTML="Apply Merge sort"
})
b4.addEventListener('click',()=>{
    a1=4
    console.log('click')
    let y1=document.querySelector("#tr")
    y1.innerHTML="Apply Insertion sort"
})
b5.addEventListener('click',()=>{
    a1=6
    console.log('click')
    let y1=document.querySelector("#tr")
    y1.innerHTML="Apply Selection sort"
})


let y=document.querySelector('.parent')
for(let i1=0;i1<arr.length;i1++){
    let t=document.createElement('div')
    t.style.height=`${arr[i1]*5}px`
    t.style.width=`${32}px`
    
    
    t.style.backgroundColor=arr1[i1]
    t.setAttribute('id','elem'+i1)
   
   
    y.appendChild(t)
}
let btn=document.querySelector('#five')
btn.addEventListener('click',async()=>{

    if(a1==2){ await quickSort(arr,0,arr.length-1)
    }
    else if(a1==1){
        await bubblesort(arr)
    }
    else if(a1==4){
       await insertionSort(arr,arr.length)
    }
    else if(a1==3){
        console.log(arr)
      await mergesort(arr,0,arr.length-1)
        console.log(arr)
    }
    else{
        await selectionSort(arr,arr.length)
    }
}
    )
const sleep=(time)=>{
    return new Promise(resolve=>setTimeout(resolve,time))
}
async function bubblesort(arr){
    let i, j;
     let swapped;
    for (i = 0; i < arr.length- 1; i++) {
        swapped = false;
        for (j = 0; j < arr.length- i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                await sleep(500)
               
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                 swapped = true;
                 swap(j,j+1)
                 console.log(i,j)
                 setTimeout(function(){
                   
                

                 }, 500); 

              
             
            }
        }
  
        // If no two elements were swapped by inner loop,
        // then break
        if (swapped == false)
            break;
    }
}
async function swap(j,j1){
    let a='elem'+j;
    let b='elem'+(j1);
    let e1=document.getElementById(a)
    let e2=document.getElementById(b)
    let h1=e1.clientHeight
    let h2=e2.clientHeight
    let b1=e1.style.backgroundColor
    let b2=e2.style.backgroundColor
    e1.style.backgroundColor=b2
    e2.style.backgroundColor=b1
    e1.style.height=h2+'px'
    e2.style.height=h1+'px'

}
async function partition(arr, low, high)
{
    // Choosing the pivot
    let pivot = arr[high];
  
    // Index of smaller element and indicates
    // the right position of pivot found so far
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
  
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
  
            // Increment index of smaller element
            i++;
           
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            await swap(i, j);
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
            
        }
    }
  
    let temp=arr[i+1]
    arr[i+1]=arr[high]
    arr[high]=temp
    await swap(i+1, high);
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, 250)
);
    return (i + 1);
}
async function quickSort(arr, low,  high)
{
    if (low < high) {
  
        // pi is partitioning index, arr[p]
        // is now at right place
      
        pi = await partition(arr, low, high);
  
        // Separately sort elements before
        // partition and after partition
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}
async function insertionSort(arr,n)
{
  
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
 
        // Move elements of arr[0..i-1],
        // that are greater than key,
        // to one position ahead of their
        // current position
        while (j >= 0 && arr[j] > key) {
            console.log(j)
            await sleep(1000)
            let temp=arr[j+1]
            arr[j + 1] = arr[j];
            arr[temp]
            await swap(j,j+1)
            j--
        }
        arr[j+1]=key
        
    }
}

async function merge(nums,start,mid,end){
    let r1=start;
    let r2=mid+1;
    
    g1=[]
    g2=[]
    h1=[]
    b1=[]
    h2=[]
    b2=[]
    while(r1<=mid){
        let a='elem'+r1;
        console.log(a)
        let x1=document.getElementById(a)

        
        
        g1.push(nums[r1]);
        h1.push(x1.clientHeight)
        b1.push(x1.style.backgroundColor)
        r1++;
    }
    while(r2<=end){
        let a='elem'+r2;
        console.log(a)
        let x1=document.getElementById(a)

        
        
        
        h2.push(x1.clientHeight)
        b2.push(x1.style.backgroundColor)
       
        g2.push(nums[r2]);
        r2++;
    }
       
    r1=0;
    r2=0;
    let j=start;
    while(r1<g1.length&&r2<g2.length){
        
        if(g1[r1]<=g2[r2]){
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
            let b='elem'+j;
            let x2=document.getElementById(b)
            nums[j]=g1[r1];
            x2.style.height=h1[r1]
            x2.style.backgroundColor=b1[r1]
            r1++;
        }
        else{
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
            let b='elem'+j;
            let x2=document.getElementById(b)
           
            x2.style.height=h2[r2]
            x2.style.backgroundColor=b2[r2]
            nums[j]=g2[r2];
            r2++;
        }
        j++;
       

    }
    
    while(r1<g1.length){
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 250)
    );
        let b='elem'+j;
        let x2=document.getElementById(b)
        nums[j]=g1[r1];
        x2.style.height=h1[r1]
        x2.style.backgroundColor=b1[r1]
            r1++;
            j++;

    }
    while(r2<g2.length){
        await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, 250)
);
        let b='elem'+j;
        let x2=document.getElementById(b)
       
        x2.style.height=h2[r2]
        x2.style.backgroundColor=b2[r2]
        nums[j]=g2[r2];
            r2++;
            j++;

    }

}
async function mergesort(nums,start,end){
    if(start>=end){
        return;
    }
    let mid=Math.floor((start+end)/2);

   
    await mergesort(nums,start,mid);
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, 250)
);
    await mergesort(nums,mid+1,end);
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, 250)
);
    await merge(nums,start,mid,end);
}
async function selectionSort(arr, n)
{
    let i, j, min_idx;
 
    // One by one move boundary of
    // unsorted subarray
    for (i = 0; i < n - 1; i++) {
 
        // Find the minimum element in
        // unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
 
        // Swap the found minimum element
        // with the first element
        if (min_idx != i){
        let temp=arr[i]
        arr[i]=arr[min_idx]

        arr[min_idx]=temp
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 250)
    );
        

           await swap(min_idx, i);
        }
    }
}
 