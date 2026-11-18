# Case smart e hacker – dataviz Radar QN

Cinque dataviz interattive per il pezzo Radar sulla vulnerabilità delle case connesse: problemi e paure degli italiani rispetto all'Europa, la spesa per la casa intelligente, i casi di dispositivi violati e le regole europee, le app che comandano serrature e telecamere. Pagine statiche in D3 v7 con gli assets condivisi della skill radar-dataviz, pubblicate su GitHub Pages dalla root di `main`.

Indice con anteprime e snippet da copiare: https://elena-aquilanti.github.io/case-smart/

## Dataviz (nell'ordine del testo)

| # | Dataviz | URL | Dati | Altezza iniziale |
|---|---|---|---|---|
| 1 | Seconda per problemi, tra le ultime per paura | https://elena-aquilanti.github.io/case-smart/problemi-e-paura/ | data/eurostat_2024.csv | 820px |
| 2 | Un euro su tre va nella sicurezza | https://elena-aquilanti.github.io/case-smart/conto-2025/ | data/spesa_2025.csv | 880px |
| 3 | In dieci anni la spesa è più che quintuplicata e la sicurezza corre di più | https://elena-aquilanti.github.io/case-smart/dieci-anni/ | data/serie_spesa.csv | 760px |
| 4 | Cinque anni e mezzo per avere le regole | https://elena-aquilanti.github.io/case-smart/regole/ | data/tappe.csv | 760px |
| 5 | Le app che aprono la porta di casa hanno tutte una falla | https://elena-aquilanti.github.io/case-smart/app-casa/ | data/app_studio.csv | 640px |

## Dati

CSV UTF-8 con separatore `;` e virgola decimale, in `data/`. Ogni valore viene dalla scheda dati del pezzo (Fase 2); fra parentesi le righe di riferimento.

- `eurostat_2024.csv`: per Paese Ue, quota di utenti di oggetti connessi che hanno avuto problemi di sicurezza o privacy e quota di chi non usa sistemi per la casa connessi per timori di sicurezza, 2024. Eurostat, isoc_iiot_bx (D53, D56, D58, D60). Grecia, Croazia e Cipro senza dato sui problemi.
- `spesa_2025.csv`: spesa per la casa intelligente nel 2025 per tipo di prodotto. Politecnico di Milano (D29, D33-D38). «Altri prodotti» è la somma di sei voci minori (D130).
- `serie_spesa.csv`: spesa 2016-2025, sicurezza 2021-2025, quota della sicurezza e crescita sull'anno prima. Politecnico di Milano (D124-D129). Quote 2021-2022 calcolate, 2023-2025 pubblicate.
- `tappe.csv`: le dieci tappe della linea del tempo, con data, tipo (attacco o regola) e testo (D63-D68, D73-D89, D94-D98, D117-D122, D131).
- `app_studio.csv`: app analizzate e app con vulnerabilità o componenti non aggiornati. Sensors, 2024 (D69-D71). Nel grafico la posizione delle 14 app sul telefono è solo illustrativa.

## Struttura

```
index.html            indice con anteprima desktop e mobile e snippet "Copia"
data/                 CSV sorgente
assets/radar.css      stile Radar (skill radar-dataviz, non modificato)
assets/radar.js       funzioni Radar (skill radar-dataviz, non modificato)
assets/embed.js       script per la pagina ospite (versione leggibile)
assets/embed.min.js   script per la pagina ospite (quello degli snippet)
assets/casa.css       componenti di questo pezzo (classifiche, scontrino, monete, linea del tempo, telefono)
assets/casa.js        funzioni comuni ai cinque grafici (animazioni, tooltip, ridisegno)
<slug>/index.html     una cartella per dataviz
```

## Snippet per il CMS

Ogni snippet contiene l'iframe e lo script inline che adatta l'altezza e passa il tema del sito. Si copiano dall'indice (https://elena-aquilanti.github.io/case-smart/). Se in un articolo ci sono più dataviz, lo script può restare in ognuna: grazie al controllo `__radarQNv2` lavora una volta sola.
