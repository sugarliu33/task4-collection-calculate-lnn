function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let arrayB = object_b.value;
  for (var b in arrayB){
    for (var item of collection_a){
      if (item.key == arrayB[b]){
        item.count--;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
