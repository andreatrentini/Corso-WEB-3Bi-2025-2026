# Guida Markdown
Markdown è un linguaggio di formattazione molto veloce (la scrittura è molto più rapida che in HTML), compatibile con HTML (posso inserire in un file md anche pezzi di codice HTML).

## Titoli
Per inserire un titolo nel file md si utilizzano i \#.
Esistono 6 livelli di titolo (come in HTML):

# Titolo 1
## Titolo 2
### Titolo 3
#### Titolo 4
##### Titolo 5
###### Titolo 6

## Paragrafi
I paragrafi 
vengono 
inseriti 
scrivendo
il testo 
senza andare a capo.

Inizio un altro paragrafo...

Se voglio forzare un ritorno a capo...  
inserisco un doppio spazio alla fine della riga.

## Elenchi puntati e numerati
Elenco puntato:
- primo elemento
- secondo elemento
  - elemento nidificato 1
  - elemento nidificato 2
    - elemento nidificato secondo livello 1
- terzo elemento

Elenco numerato:
1. Primo elemento
2. secondo elemento
   1. sotto elemento
   2. sotto elemento
4. Terzolemento
9. Quartolemento
3. Quinto elemento

## Formattazione caratteri
Corsivo: *questo testo è in corsivo*  
_Anche questo testo è in corsivo..._

Grassetto: **Questo testo è in grassetto...**  
__Anche questo testo è in grassetto...__

Grassetto e corsivo: ***Testo in grassetto e corsivo***  
___Anche questo testo è in grassetto e corsivo___

Barrato: ~~Questo è un testo barrato~~

## Citazioni
> Con questo simbolo si inserisce una citazione rientrata nel documento
>> Altra citazione rientrata

## Link e immagini
**Motori di ricerca:**
- [Google](https://google.com)
- [Bing](https://bing.com)

**Immagini**
![Questa è un'immagine con URL relativa](./niagara.webp)  
![Questa è un'immagine con URL assoluta](https://www.marconirovereto.it/wp-content/uploads/assets/images/covers/cover-sportello-matematica-280x280.webp)

## Codice
```Java
public class HelloWorld {
    public static void main(String[] args) {
        // Questa è una line di commento
    }
}
```
```bash
cd /workspaces
ls
...
```

A volte si vuole inserire una istruzione in un paragrafo normale.
Es. In java per creare una classe si usa `public class Esempio`

## Tabelle
|Intestazione 1|Intestazione 2|Intestazione 3|
|-|-|-|
| valore 1 | Valore 2 | Valore 3 |
| Valore 4 | Valore 5 | Valore 6 |
| Valore 4 | Valore 5 | Valore 6 |
| Valore 4 | Valore 5 | Valore 6 |
| Valore 4 | Valore 5 | Valore 6 |
| Valore 4 | Valore 5 | Valore 6 |
| Valore 4 | Valore 5 | Valore 6 |

## Note a piè pagina
Capita in un documento di voler inserire note a piè pagina [^1]. Ovviamente anche le note possono essere formattate [^2].

[^1]: Questo è il testo della nota 1
[^2]: Questo è il testo **della nota 2**
