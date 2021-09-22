
function pixValue(string){
    return parseInt(string.slice(0, -2))
}

function subtractArray(arr1, arr2){
    return arr1.filter(element => !arr2.includes(element))
}





function elementsOverlap(first, second){
    // console.log(first, second)
    const fBound = first.getBoundingClientRect()
    const sBound = second.getBoundingClientRect()
    if(fBound.top > sBound.bottom || fBound.left > sBound.right || fBound.right < sBound.left || fBound.bottom < sBound.top)
        return false
    else
        return true
}

function noElementsOverlap(element, arrayOfElements){
    for (let arrElement of arrayOfElements){
        if(elementsOverlap(element, arrElement))
            return false
    }
    return true
}
// console.log(pixValue('-20px'))

function randomNumberBetween(min, max){
    let interval = max - min
    return Math.random() * interval + min
}

function isNotInitialPanel(element){
    return element.id != 'initial'
}

function closeElementsAndChildren(element){
    element.style.display = 'none'
    element.style.overflow = 'hidden'
}

function showElementsAndChildren(element){
    element.style.display = 'flex'
    element.style.overflow = 'visible'
}



class Game{
    constructor(){
        this.tag = document.querySelector('[wm-flappy]')
        this.obstaculos = new Obstacles('#obstacles')
        this.background = new Background('#background')
        this.bird = new Bird
        this.bird.tag.style.left = `${(this.tag.clientWidth - this.bird.tag.clientWidth) / 2}px`
        this.bird.tag.style.top = `${(this.tag.clientHeight - this.bird.tag.clientHeight) / 2}px`
        this.gameHasStarted = 0
        this.tunnelsAndCaps = document.querySelectorAll('.tunnel *')
        this.scoreBoard = document.querySelector('#scoreboard')
        this.scoreArray = [0, 0, 0, 0, 0, 0]
        this.playButton = document.querySelector('#start-menu .play-button')
        this.playButton.onclick = () => this.start()
        this.replayButton = document.querySelector('#replay')
        this.replayButton.onclick = () => this.restart() 
        this.startMenu = document.querySelector('#start-menu')
        this.restartMenu = document.querySelector('#restart-menu')
        // this.restartMenu.style.display = 'none'
        this.flagRecord = 1
        this.recordBoard = document.querySelector('#recordboard')
        this.recordScore = 0
        this.totalPoints = 0
        this.finalScore = document.querySelector('#score')
        this.restartingAnimation()
        this.pauseButton = document.querySelector('#pause-button')
        this.pauseButton.onclick = () => this.pauseGame()
        this.pauseMenu = document.querySelector('#pause')
        // this.pauseMenu.style.display = 'none'
        this.closePauseMenu()
        this.unpauseButton = document.querySelector('#pause .play-button')
        this.unpauseButton.onclick = () => this.unpauseGame()
        this.infoButton = document.querySelector('#info-button')
        this.infoButton.onclick = () => this.showInfo()
        this.goBackButton = document.querySelector('#go-back')
        this.goBackButton.onclick = () => this.closeInfo()
        document.querySelector('#background-select').onclick = () => this.background.changeBackground()
    }
    
    pauseGame(){
        clearInterval(this.stopCollisionDetection)
        this.background.stopAnimating()
        this.bird.stopAnimating()
        this.obstaculos.stopAnimating() 
        // this.pauseMenu.style.display = 'block'
        this.openPauseMenu()
    }

    showInfo(){
        // document.querySelectorAll('#pause *').forEach((element, index) =>{
        //     console.log(element)
        //     if(index > 2)
        //         element.style.display = 'flex'
        //     else
        //         element.style.display = 'none'
        // })

        const info = document.querySelector('#info')
        info.style.display = 'flex'
        info.style.overflow = 'visible'
        const infoArray = Array.from(document.querySelectorAll('#info, #info *, #pause-menu'))
        // console.log(typeof(info.children))
        const closeArray = subtractArray(Array.from(this.pauseMenu.children), infoArray)
        closeArray.forEach(element => {
            element.style.display = 'none'
            element.style.overflow = 'hidden'
        })
    }
    
    closeInfo(){
        // document.querySelectorAll('#pause *').forEach((element, index) =>{
        //     if(index <= 2 || index == 10)
        //         element.style.display = 'flex'
        //     else
        //         element.style.display = 'none'
        // })
        const info = document.querySelector('#info')
        info.style.display = 'none'
        info.style.overflow = 'hidden'
        // const infoArray = Array.from(document.querySelectorAll('#info, #info *, #pause-menu, #background-menu'))
        const openArray = document.querySelectorAll('#pause-options') 
        openArray.forEach(element => {
            element.style.display = 'flex'
            element.style.overflow = 'visible'
        })

    }


    unpauseGame(){
        if(this.gameHasStarted){
            this.bird.setMaxHeight()
            this.obstaculos.startAnimating(5, 0)
            this.background.stopInitialAnimation()
            this.background.startAnimating(20)
            this.bird.startAnimating()
            this.stopCollisionDetection = setInterval(this.collisionDetection.bind(this), 10)
            // this.pauseMenu.style.display = 'none'
        }
        this.closePauseMenu()
    }

    closePauseMenu(){
        this.pauseMenu.style.display = 'none'
        this.pauseMenu.querySelectorAll('*').forEach(element => element.style.display = 'none')
    }

    openPauseMenu(){
        this.pauseMenu.style.display = 'flex'
        this.pauseMenu.querySelectorAll('*').forEach(element => {
            if(element.id != 'info' && element.id != 'background-menu')
                element.style.display = 'flex'
        })
    }


    startingAnimation(){
        // console.log(this.startMenu.children)
        this.startMenu.children[0].classList.add('animated-up')
        this.startMenu.children[1].classList.add('animated-down')
        this.startMenu.children[2].classList.add('animated-down')
        this.pauseButton.classList.add('displayed')
        setTimeout(() => {
            this.startMenu.children[0].classList.remove('animated-up')
            this.startMenu.children[1].classList.remove('animated-down')
            this.startMenu.children[2].classList.remove('animated-down')
            this.startMenu.style.display = 'none'
        }, 3000)
    }
    
    restartingAnimation(skip = 1){
        if(!skip)
            this.pauseButton.classList.add('displayed')

        this.restartMenu.children[0].classList.add('animated-up')
        this.restartMenu.children[1].classList.add('animated-down')
        // setTimeout(() => {
            
        //     this.restartMenu.style.display = 'none'
        // }, 2000)
    }


    start(){
        if(!this.gameHasStarted){
            this.bird.setMaxHeight()
            this.gameHasStarted = 1
            this.obstaculos.startAnimating(5)
            this.background.stopInitialAnimation()
            this.background.startAnimating(20)
            this.bird.startAnimating()
            this.stopCollisionDetection = setInterval(this.collisionDetection.bind(this), 10)
            this.startingAnimation()
            this.tag.onmousedown = () => this.bird.accelerate()
        }        
    }
    
    restart(){
        this.flagRecord = 0
        this.totalPoints = 0
        this.scoreBoard.innerHTML = `${this.totalPoints}`
        this.obstaculos.tag.style.width = `${this.obstaculos.tag.parentNode.clientWidth * 3}px`
        this.obstaculos.tag.style.left = '0px'
        if(!document.querySelector('#initial')){
            const initialPanel = document.createElement('div')
            initialPanel.classList.add('obstacle-panel')
            initialPanel.id = 'initial'
            this.obstaculos.tag.insertBefore(initialPanel, this.obstaculos.tag.children[0])
        } else{
            this.scoreBoard.innerHTML = '0'
        }
        this.clearScoreArray()
        this.restartingAnimation(0)
        this.start()
    }
    
    newRecordAnimated(){
        this.recordBoard.classList.add('animated-record')
        this.recordBoard.innerHTML = 'NEW RECORD!'
        setTimeout(() => {
            this.recordBoard.classList.remove('animated-record')
            this.newRecord()
        }, 5000)
    }

    newRecord(){
        if(!this.recordBoard.classList.contains('animated-record'))
            this.recordBoard.innerHTML = `RECORD: ${this.recordScore}`
        if(!this.flagRecord){
            this.flagRecord = 1
            this.newRecordAnimated()
        }
    }

    clearScoreArray(){
        for(let i = 0; i < this.scoreArray.length; i++){
            this.scoreArray[i] = 0
        }
    }

    scorePoint(){
        this.totalPoints++
        this.scoreBoard.innerHTML = `${this.totalPoints}`
        if(this.totalPoints > this.recordScore){
            this.recordScore = this.totalPoints
            this.newRecord()
        }
    }

    collisionDetection(){
        this.tunnelsAndCaps.forEach((element, index) => {
            const tunnelGap = element.parentNode.parentNode
            if(elementsOverlap(element, this.bird.tag)){
                this.gameOver()       
            } else if(elementsOverlap(tunnelGap, this.bird.tag)){
                this.scoreArray[Math.floor(index / 6)] = 1
            } else if (this.scoreArray[Math.floor(index / 6)] == 1){
                this.scoreArray[Math.floor(index / 6)] = 0
                this.scorePoint()
            }
        })
    }

    newRecordMessage(){
        return `CONGRATULATIONS!<br>YOU SET A NEW RECORD: <br>${this.totalPoints} POINTS`
    }

    gameOverAnimation(){
        this.restartMenu.children[0].classList.remove('animated-up')
        this.restartMenu.children[1].classList.remove('animated-down')
    }

    gameOver(){
        this.gameHasStarted = 0
        // this.pauseButton.classList.remove('displayed')
        clearInterval(this.stopCollisionDetection)
        this.restartMenu.style.zIndex = '10'
        this.gameOverAnimation()
        this.background.stopAnimating()
        this.bird.stopAnimating()
        this.obstaculos.stopAnimating()        
        this.restartMenu.style.display = 'flex'
        this.finalScore.innerHTML = `${this.flagRecord ? this.newRecordMessage() : `YOU SCORED ${this.totalPoints} POINTS` }`
    }
}









class Bird{

    constructor(){
        this.tag = document.querySelector('#bird')
        this.velocity = 1
        this.maxWidth = this.tag.parentNode.clientWidth 
        this.areaDoJogo = document.querySelector('#obstacles')
        this.stopInitialAnimation = setInterval(this.initialAnimation.bind(this), 10)
    }
    
    setMaxHeight(){
        this.maxHeight = this.tag.parentNode.clientHeight - this.tag.clientHeight
    }


    accelerate(){
        this.velocity = 3
    }

    belowTop(top){
        if(pixValue(this.tag.style.top) > top)
            return true
        return false
    }

    aboveBottom(bottom){
        if(pixValue(this.tag.style.top) < bottom)
            return true
        return false
    }
    
    move(){
        this.tag.style.top = `${pixValue(this.tag.style.top) - this.velocity}px`
    }
    
    initialAnimation(){

        let bottom = this.areaDoJogo.clientHeight * 3/4
        let top = this.areaDoJogo.clientHeight - bottom
        if(this.belowTop(top) && this.aboveBottom(bottom))
            this.move()
        else{
            this.velocity *= -1
            this.move()
        }
    }

    checkAndMove(){ 

        if(this.belowTop(0) && this.velocity > 0){
            this.move()
        } else if(this.aboveBottom(this.maxHeight) && this.velocity < 0){
            this.move()
        }

    }

    gravity(){
        if(this.velocity > -4)
            this.velocity -= 0.1
    }

    startAnimating(){
        this.stopMoving = setInterval(this.checkAndMove.bind(this), 8)
        this.stopGravity = setInterval(this.gravity.bind(this), 8)
        clearInterval(this.stopInitialAnimation)
    }

    stopAnimating(){
        clearInterval(this.stopGravity)
        clearInterval(this.stopMoving)
    }

}





class GroupOfPanels{

    constructor(tag){
        this.tag = document.querySelector(tag)
        this.minPosition = -1 * this.tag.parentNode.clientWidth
        this.windowHeight = this.tag.clientHeight
        this.tag.style.left = '0px'
        this.panelWidth = document.querySelector('.obstacle-panel').clientWidth
    }

    reposition(){
        const repositionedPanel = this.tag.firstElementChild
        let curWidth = this.tag.clientWidth
        this.tag.removeChild(repositionedPanel)
        this.tag.style.left = '0px'
        if(isNotInitialPanel(repositionedPanel))
            this.tag.appendChild(repositionedPanel)
        else if(this.tag.clientWidth > 2 * this.panelWidth)
            this.tag.style.width = `${this.panelWidth * 2}px`
    }

    moveLeft (){
        let curPosition = pixValue(this.tag.style.left)
        if(curPosition <= this.minPosition){
            this.reposition()
        } else {
            this.tag.style.left = `${curPosition - 1}px`
        }
    }

    startAnimating(timer){
        this.stopMoving = setInterval(this.moveLeft.bind(this), timer)
    }


    stopAnimating(){
        clearInterval(this.stopMoving)
    }
}




class Obstacles extends GroupOfPanels{
    
    randomizeGaps(panel){
        const tunnelGaps = panel.querySelectorAll('.tunnel-gap')
        let capHeight = document.querySelector('.cap').clientHeight + 6 // 6 é o dobro do tamanho da borda
        let maxMovement = (this.windowHeight - 175 - 2 * capHeight) / 2
        tunnelGaps.forEach(gap => {
            gap.style.top = `${-this.windowHeight + randomNumberBetween(-maxMovement, maxMovement)}px`
        })
    }

    startAnimating(timer, randomize = 1){
        let speed = 0.8
        const panels = document.querySelectorAll('.obstacle-panel')

        if(randomize == 1)
            panels.forEach(panel => this.randomizeGaps(panel))

        this.stopMoving = setInterval(this.moveLeft.bind(this), timer*speed)
        console.log(speed)
    }
    

    
}

class Background extends GroupOfPanels{
    constructor(tag){
        super(tag)
        this.imageTags = this.tag.querySelectorAll('img')
        this.movementDirection = 1
        this.stopInitial = setInterval(this.initialAnimation.bind(this), 50)
        this.currentBackground = 1
        this.numberOfBackgrounds = 5
    }

    initialAnimation(){
        let curPosition = pixValue(this.tag.style.left)
        if(curPosition > -50 && this.movementDirection < 0)
            this.tag.style.left = `${curPosition - 1}px`
         else if (curPosition < 0 && this.movementDirection > 0)
            this.tag.style.left = `${curPosition + 1}px`
         else
            this.movementDirection *= -1
    }

    stopInitialAnimation(){
        clearInterval(this.stopInitial)
    }

    changeBackground(){
        console.log("HERE")
        this.currentBackground++
        if(this.currentBackground > this.numberOfBackgrounds)
            this.currentBackground = 1
        this.imageTags.forEach(tag => tag.src = `imgs/background${this.currentBackground}.jpg`) 
    }
}


new Game()
