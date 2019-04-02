<template>
  <view class="container">
    <text class="text-color-primary">PaperKeep</text>
  </view>
  <view class="container">
    <flat-list
      :data="[{key: 'a'}, {key: 'b'}, {key: 'c'}]"
      :render-item="(item) => renderList(item)"
    />
  </view>
</template>
 
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>

<script>
import React from 'react';
import {Text} from 'react-native';
    export default {
        methods: {
            renderList: function(item) {
                return (<Text>{item.item.key}</Text>)
            }
        }
    }
</script>