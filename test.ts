let 环境温度 = 0
NTCSenor.set(NTC_B.B3380)
环境温度 = NTCSenor.Temperature(pins.analogReadPin(AnalogPin.P1))
basic.showNumber(环境温度)
