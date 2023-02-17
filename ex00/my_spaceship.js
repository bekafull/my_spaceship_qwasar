function my_spaceship(space_way){
    let spacechip = {
        x: 0,
        y: 0,
        direction: 'up'
    }
for(var i=0;i<space_way.length;i++){
    if(space_way[i]=='R' && spacechip.direction == 'up'){
        spacechip.direction = 'right';
    }else if(space_way[i] == 'R' && spacechip.direction == 'right'){
        spacechip.direction = 'down';
     }else if(space_way[i] == 'R' && spacechip.direction == 'down'){
         spacechip.direction = 'left';
    }else if(space_way[i] == 'R' && spacechip.direction == 'left'){
        spacechip.direction = 'up';
     }else if(space_way[i] == 'L' && spacechip.direction == 'up'){
        spacechip.direction = 'left';
     }else if(space_way[i] == 'L' && spacechip.direction == 'left'){
        spacechip.direction = 'down';
     }else if(space_way[i] == 'L' && spacechip.direction == 'down'){
        spacechip.direction = 'right';
    }else if(space_way[i] == 'L' && spacechip.direction == 'right'){
        spacechip.direction = 'up';
    }else if(space_way[i] == 'A' && spacechip.direction == 'up'){
        spacechip.y -= 1;
    }else if(space_way[i] == 'A' && spacechip.direction == 'left'){
        spacechip.x -= 1;
     }else if(space_way[i] == 'A' && spacechip.direction == 'down'){
        spacechip.y += 1;
    }else if(space_way[i] == 'A' && spacechip.direction == 'right'){
        spacechip.x += 1;
    }
  }

  return "{x: "+spacechip.x+", y: "+spacechip.y+", direction: '"+spacechip.direction+"'}";


}