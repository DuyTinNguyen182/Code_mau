const cols = 10;
const rows = 20;
const block_size = 30;
const color_mapping = [
    'green', 'blue', 'yellow', 'orange', 'red', 'purple', 'aqua', 'white'
]

const brick_layout = [
  [
    [
      [7, 1, 7],
      [1, 1, 7],
      [1, 7, 7],
    ],
    [
      [1, 1, 7],
      [7, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 7, 1],
      [7, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 7],
      [7, 1, 1],
    ],
  ],
  [
    [
      [7, 1, 7],
      [7, 1, 7],
      [7, 1, 1],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [1, 7, 7],
    ],
    [
      [1, 1, 7],
      [7, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 7, 1],
      [1, 1, 1],
      [7, 7, 7],
    ],
  ],
  [
    [
      [7, 1, 7],
      [1, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 1, 7],
      [7, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 1, 7],
      [1, 1, 7],
      [7, 1, 7],
    ],
  ],
  [
    [
      [1, 7, 7],
      [1, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 1, 1],
      [1, 1, 7],
      [7, 7, 7],
    ],
    [
      [7, 1, 7],
      [7, 1, 1],
      [7, 7, 1],
    ],
    [
      [7, 7, 7],
      [7, 1, 1],
      [1, 1, 7],
    ],
  ],
  [
    [
      [7, 7, 7, 7],
      [1, 1, 1, 1],
      [7, 7, 7, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 1, 7],
      [7, 7, 1, 7],
      [7, 7, 1, 7],
      [7, 7, 1, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 7, 7, 7],
      [1, 1, 1, 1],
      [7, 7, 7, 7],
    ],
    [
      [7, 1, 7, 7],
      [7, 1, 7, 7],
      [7, 1, 7, 7],
      [7, 1, 7, 7],
    ],
  ],
  [
    [
      [1, 7, 7],
      [1, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 1, 1],
      [7, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [7, 7, 1],
    ],
    [
      [7, 1, 7],
      [7, 1, 7],
      [1, 1, 7],
    ],
  ],
  [
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
  ],
];   

const white_id = 7;

const canvas = document.getElementById("board");
const ctx = canvas.getContext('2d');

ctx.canvas.width = cols * block_size;
ctx.canvas.height = rows * block_size;

class Board{
    constructor(ctx){
        this.ctx = ctx;
        this.grid = this.createWhiteBoard();
    }

    createWhiteBoard(){
        return Array.from({length: rows}, () => Array(cols).fill(white_id));
    }

    drawCell(toa_do_x, toa_do_y, ma_mau){
        this.ctx.fillStyle = color_mapping[ma_mau] || color_mapping[white_id];
        this.ctx.fillRect(toa_do_x * block_size, toa_do_y * block_size, block_size, block_size);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(toa_do_x * block_size, toa_do_y * block_size, block_size, block_size);
    }

    drawBoard(){
        for(let row = 0; row < this.grid.length; row++){
            for(let col = 0; col < this.grid[0].length; col++){
                this.drawCell(col, row, white_id);
            }
        }
    }
}

class Brick{
    constructor(id){
        this.id = id;
        this.layout = brick_layout[id];
        this.activeIndex = 0; //Luu huong
        this.colPos = 5; //Luu vi tri vien gach
        this.rowPos = 6; //Luu vi tri vien gach
    }
    draw(){
        for(let row = 0; row < this.layout[this.activeIndex].length; row++){
            for(let col = 0; col < this.layout[this.activeIndex][0].length; col++){
                if(this.layout[this.activeIndex][row][col] !== white_id){
                    board.drawCell(col + this.colPos, row + this.rowPos, this.id);
                }
            }
        }
    }
}

board = new Board(ctx);
//board.ve_o(1, 1, 1);
board.drawBoard();
brick = new Brick(6);
brick.draw();
console.table(board.grid);