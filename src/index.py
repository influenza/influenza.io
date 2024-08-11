import matplotlib.pyplot as pypl
import numpy as np
import math
import random
import datetime as DT
from matplotlib.font_manager import FontProperties
import json
import codecs
import numpy as np


class ANALISEDEDADOS:
    def __init__(self) -> None:
        pass

    def mes(self):
        current_month = DT.date.today().month
        month_days = {2:29, 4:30, 6:30, 9:30, 11:30}
        return np.array([day + 1 for day in range(31)]) if current_month not in month_days else np.array([day + 1 for day in range(month_days[current_month])])

    def amostradados(self, y,valor=4000):
        return np.array([random.randint(valor,valor+4000) for _ in range(y)])

    def dadosdia(self, x, data=[]):
        if len(data)==24:
            return [data,[x+1 for x in range(24)]] if x == 1 else sum(data)
        else:            
            random_data = self.amostradados(24)
            return [random_data,[x+1 for x in range(24)]] if x == 1 else sum(random_data)

    def dadossem(self,x,data=[]):
        return [np.array([self.dadosdia(0) for _ in range(7)]),[x+1 for x in range(7)]]

    def dadosmes(self,x):
        days_in_month = self.mes()
        return [np.array([self.dadosdia(0) for _ in range(len(days_in_month))]),[x+1 for x in range(len(days_in_month))]] if x==1 else sum(np.array([self.dadosdia(0) for _ in range(len(days_in_month))]))

    def dadosano(self):
        return [np.array([self.dadosmes(x=0) for _ in range(12)]),[x for x in range(12)]]    

mes=[f"Quantidade de CO2 em toneladas consumida por més",f"Dia do més",f"Quantidade de CO2 em toneladas consumida por dia"]
data = {24:[f"Quantidade de CO2 em toneladas consumida por dia",f"Horas do dia",f"Quantidade de CO2 em toneladas consumida por hora"],29:mes,30:mes,31:mes,7:[f"Quantidade de CO2 em toneladas consumida por semana",f"Dias da semana",f"Quantidade de CO2 em toneladas consumida por dia "],12:[f"Quantidade de CO2 em toneladas consumida por Ano",f"Més do ano",f"Quantidade de CO2 em toneladas consumida por més"]}
objdata = {2:29, 4:30, 6:30, 9:30, 11:30}
def barra(x,y,cor):
    plt.bar(x,y, color=cor)
    pypl.title(data[len(y)][0])
    pypl.xlabel(data[len(y)][1])
    pypl.ylabel(data[len(y)][2])
    plt.savefig("diabarra.png", dpi=200, bbox_inches='tight') 
    plt.show()

def pizza(x,y,cor):
    plt.pie(y, colors=cor, labels=x)
    pypl.title(data[len(y)][0])
    pypl.xlabel(data[len(y)][1])
    pypl.ylabel(data[len(y)][2])
    plt.savefig("diapbarra.png", dpi=200, bbox_inches='tight') 
    plt.show()

def media(x,y,cor):
        print(y)
        print(x)
        print(cor)
        print(len(y))
        print(len(x))
        print(len(cor))

        pypl.title(data[len(y)][0])
        pypl.xlabel(data[len(y)][1])
        pypl.ylabel(data[len(y)][2])

        pypl.plot(x,[np.mean(y) for x in range(30)])
        pypl.xlim(0,len(y)+0.5)
        pypl.scatter(x,y,color=cor) 
        pypl.savefig("diamedia.png",dpi=200) 

        pypl.legend()
        pypl.show()

import matplotlib.pyplot as plt
def graficos(valorx,valory,cor):
    pizza(valorx,valory,cor)
    barra(valorx,valory,cor)
    media(valorx,valory,cor)



def valores(func):
    y = func[0]
    x = func[1]
    x2 = [x1 for x1 in range(12)]
    print(x2)
    plt.title(data[len(y)][0])
    x3 = [f"{round((y[i]/sum(y)*100),2)}%" for i in range(len(x))]
    cores = []


    if DT.date.today().month not in objdata:
        cores = ['green', 'gray', 'plum', 'yellow','blue','lime','olive','red','silver',
                'pink','salmon','orange','gold','aqua','white','coral','black','brown','darkgreen','navy','slateblue',
                'teal','fuchsia','maroon','burlywood','peru','firebrick','floralwhite','aquamarine','turquoise','violet']
    elif DT.date.today().month in objdata and DT.date.today().month != 2:
       cores =  ['green', 'gray', 'plum', 'yellow','blue','lime','olive','red','silver',
                'pink','salmon','orange','gold','aqua','white','coral','black','brown','darkgreen','navy','slateblue',
                'teal','fuchsia','maroon','burlywood','peru','firebrick','floralwhite','aquamarine','turquoise']
    else:
     cores =    ['green', 'gray', 'plum', 'yellow','blue','lime','olive','red','silver',
                'pink','salmon','orange','gold','aqua','white','coral','black','brown','darkgreen','navy','slateblue',
                'teal','fuchsia','maroon','burlywood','peru','firebrick','floralwhite','aquamarine']

    plt.tight_layout() 
    y2 = list(zip(x, y, x3, cores))
    print(y)
    data_with_brackets = [list(item) for item in y2]
    print(data_with_brackets)
    return [data_with_brackets,sum(y),np.var(y),np.min(y),np.max(y)]


meslinha=np.linspace(93000, 93000)
t={24:np.linspace(4800, 4800),29:meslinha,30:meslinha,31:meslinha,7:np.linspace(93000, 93000),12:np.linspace(107.800,107.800)}

al1 = ANALISEDEDADOS()
file_path = "/path.json"
valores(ANALISEDEDADOS.dadosmes(al1,1))










