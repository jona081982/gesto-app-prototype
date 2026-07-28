import { Routes, Route } from 'react-router-dom'
import { EntryPage } from './pages/EntryPage'
import { ProcessingPage } from './pages/ProcessingPage'
import { DiagnosisGreenPage } from './pages/DiagnosisGreenPage'
import { DiagnosisYellowPage } from './pages/DiagnosisYellowPage'
import { DiagnosisRedPage } from './pages/DiagnosisRedPage'
import { PaymentPage } from './pages/PaymentPage'
import { DeliveryPage } from './pages/DeliveryPage'
import { ReturnPage } from './pages/ReturnPage'
import { AppShell } from './components/AppShell'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/procesando" element={<ProcessingPage />} />
        <Route path="/diagnostico/verde" element={<DiagnosisGreenPage />} />
        <Route path="/diagnostico/amarillo" element={<DiagnosisYellowPage />} />
        <Route path="/diagnostico/rojo" element={<DiagnosisRedPage />} />
        <Route path="/pago" element={<PaymentPage />} />
        <Route path="/entrega" element={<DeliveryPage />} />
        <Route path="/volver" element={<ReturnPage />} />
      </Routes>
    </AppShell>
  )
}
