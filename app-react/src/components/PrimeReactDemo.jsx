import { useState } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'

function PrimeReactDemo() {
  const [concluido, setConcluido] = useState(false)

  return (
    <section className="prime-page">
      <Card
        title="PrimeReact em prática"
        subTitle="Componentes prontos para acelerar interfaces"
      >
        <p>
          Nesta página, os botões, o card e a etiqueta são componentes da
          biblioteca PrimeReact.
        </p>

        <div className="prime-actions">
          <Tag
            value={concluido ? 'Prática concluída' : 'Em andamento'}
            severity={concluido ? 'success' : 'warning'}
          />

          <Button
            label={concluido ? 'Concluído' : 'Marcar como concluído'}
            icon={concluido ? 'pi pi-check' : 'pi pi-book'}
            onClick={() => setConcluido(!concluido)}
          />
        </div>
      </Card>
    </section>
  )
}

export default PrimeReactDemo