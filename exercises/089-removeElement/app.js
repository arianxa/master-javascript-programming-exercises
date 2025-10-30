function removeElement(arr,elem){
     let extra=arr.filter(function(item){
        
            return item!=elem
      
    })
  return extra
}