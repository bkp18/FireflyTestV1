/**
 * Blocks for driving servo and DC motors, using the Firefly connection Board
 */
//% groups='["DC Motor","Servo Motor"]'
//% weight=111 color=#1565B2 icon="\uf085" block="Firefly"
namespace Firefly {
    //Initialize with using servo
    let usingServo = true;
    PCA9685.reset(105)
    PCA9685.init(105, 40)

    //Switches to decired motor type
    function adjustMotorType(wantedMotorType: string): void {
        if(wantedMotorType == "servo" && !usingServo) {
            console.log("adjust to servo")
            usingServo = true
            PCA9685.reset(105)
            PCA9685.init(105, 40)
        }
        else if(wantedMotorType == "dc" && usingServo) {
            console.log("adjust to dc")
            usingServo = false
            PCA9685.reset(105)
            PCA9685.init(105, 1000)
        }
        else {
            console.log("no adjustment needed")
        }
    }

    //% block
    //% blockHidden=true
    export enum ServoPinValues {
        servo1 = 1,
        servo2 = 2,
        servo3 = 3,
        servo4 = 4
    }

    //% blockId=set_servo
    //% block="Set %servoAtPin| to position %angle"
    //% group="Servo Motor"
    //% angle.min=0 angle.max=138 angle.defl=0
    export function setServo(servoAtPin: ServoPinValues, angle: number): void {
        adjustMotorType("servo")

        switch(servoAtPin) {
            case 1:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo13, angle, 105)
                break;
            case 2:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, angle, 105)
                break;
            case 3:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, angle, 105)
                break;
            case 4:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo16, angle, 105)
                break;
        }
    }

    //% block
    //% blockHidden=true
    export enum DCPinValues {
        dcmotor1 = 1,
        dcmotor2 = 2,
        dcmotor3 = 3,
        dcmotor4 = 4
    }

    //% block
    //% blockHidden=true
    export enum DCDirectionValues {
        forward = 0,
        backward = 1
    }

    //% blockId=set_dc
    //% block="Drive %dcAtPin| %direction| at speed %speed"
    //% group="DC Motor"
    //% speed.min=0 speed.max=255 speed.defl=0
    export function setDC(dcAtPin: DCPinValues, direction: DCDirectionValues, speed: number): void {
        adjustMotorType("dc")
        
        let inputA = 0;
        let inputB = 0;

        switch(direction) {
            case 0:
                inputA = 100;
                break;
            case 1:
                inputB = 100;
        }
        
        switch(dcAtPin) {
            case 1:
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED8, speed, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED11, inputA, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED12, inputB, 105)
                break;
            case 2:
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, speed, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED9, inputA, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED10, inputB, 105)
                break;
            case 3:
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, speed, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, inputA, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, inputB, 105)
                break;
            case 4:
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, speed, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, inputA, 105)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, inputB, 105)
                break;   
        }
    }
}