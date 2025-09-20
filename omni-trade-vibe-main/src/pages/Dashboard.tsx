import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users,
  Activity,
  Server,
  Play,
  Pause,
  RefreshCw
} from "lucide-react";

// Trading Dashboard Main Page Component
const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Principal</h1>
          <p className="text-muted-foreground">
            Vista general del rendimiento del bot de trading
          </p>
        </div>
        
        {/* Bot Control Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualizar
          </Button>
          <Button variant="default" size="sm" className="bg-success hover:bg-success/90">
            <Play className="w-4 h-4 mr-2" />
            Iniciar Bot
          </Button>
          <Button variant="outline" size="sm">
            <Pause className="w-4 h-4 mr-2" />
            Pausar
          </Button>
        </div>
      </div>

      {/* Status Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Balance Total */}
        <Card className="p-6 shadow-trading border-0 bg-gradient-dashboard">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Balance Total</p>
              <p className="text-2xl font-bold text-success">$12,847.52</p>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1 text-success" />
                +2.4% hoy
              </p>
            </div>
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-success" />
            </div>
          </div>
        </Card>

        {/* Profit/Loss Diario */}
        <Card className="p-6 shadow-trading border-0 bg-gradient-dashboard">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">P&L Diario</p>
              <p className="text-2xl font-bold text-success">+$287.45</p>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1 text-success" />
                +1.8% desde ayer
              </p>
            </div>
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
          </div>
        </Card>

        {/* Cuentas Activas */}
        <Card className="p-6 shadow-trading border-0 bg-gradient-dashboard">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Cuentas Activas</p>
              <p className="text-2xl font-bold text-foreground">8/12</p>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <Activity className="w-3 h-3 mr-1 text-primary" />
                66% operando
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>

        {/* Estado del Sistema */}
        <Card className="p-6 shadow-trading border-0 bg-gradient-dashboard">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Sistema</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                  Online
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                CPU: 34% | RAM: 2.1GB
              </p>
            </div>
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-success" />
            </div>
          </div>
        </Card>
      </div>

      {/* Active Trades & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Active Trades */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Operaciones Activas</h3>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              5 activas
            </Badge>
          </div>
          
          <div className="space-y-3">
            {[
              { pair: "EUR/USD", type: "BUY", size: "0.5", pnl: "+$23.45", status: "success" },
              { pair: "GBP/JPY", type: "SELL", size: "0.3", pnl: "-$8.20", status: "danger" },
              { pair: "AUD/CAD", type: "BUY", size: "0.8", pnl: "+$45.60", status: "success" },
              { pair: "USD/CHF", type: "SELL", size: "0.4", pnl: "+$12.30", status: "success" },
              { pair: "NZD/USD", type: "BUY", size: "0.6", pnl: "-$5.80", status: "danger" },
            ].map((trade, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Badge 
                    variant={trade.type === "BUY" ? "default" : "secondary"}
                    className={trade.type === "BUY" ? "bg-success text-success-foreground" : "bg-danger text-danger-foreground"}
                  >
                    {trade.type}
                  </Badge>
                  <div>
                    <p className="font-medium">{trade.pair}</p>
                    <p className="text-sm text-muted-foreground">Tamaño: {trade.size} lots</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${trade.status === "success" ? "text-success" : "text-danger"}`}>
                    {trade.pnl}
                  </p>
                  <p className="text-xs text-muted-foreground">P&L</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* System Status */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Estado del Sistema</h3>
          
          <div className="space-y-4">
            {/* Connection Status */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Conexiones</span>
                <Badge variant="secondary" className="bg-success/20 text-success">Estable</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">8/12 brokers conectados</p>
            </div>

            {/* Performance */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Rendimiento</span>
                <span className="text-sm text-success">Excelente</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{width: "92%"}}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Latencia: ~15ms</p>
            </div>

            {/* Recent Signals */}
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Señales Recientes</h4>
              <div className="space-y-2">
                {[
                  { time: "14:23", signal: "BUY EUR/USD", strength: "Strong" },
                  { time: "14:18", signal: "SELL GBP/JPY", strength: "Medium" },
                  { time: "14:12", signal: "BUY AUD/CAD", strength: "Strong" },
                ].map((signal, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-muted-foreground">{signal.time}</span>
                      <span className="ml-2 font-medium">{signal.signal}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={signal.strength === "Strong" ? "border-success text-success" : "border-warning text-warning"}
                    >
                      {signal.strength}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;