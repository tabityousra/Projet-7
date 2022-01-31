class GestionSalle{
    #listSalle =[];
    compteur = 0

    get listSalle(){
        return this.#listSalle
    }

    addSalle(salle){
        this.compteur = this.compteur +1
        salle.id = this.compteur
        this.#listSalle.push(salle)
    }

    getId(id){
        for(let i=0 ; i<this.listSalle.length; i++){
            if(id == this.#listSalle[i].id){
                return this.#listSalle[i]
            }
        }
    }

    modifierSalle(salle){
        for(let i=0 ; i<this.#listSalle.length; i++){
            if(salle.id == this.#listSalle[i].id){
             this.#listSalle[i]=salle
            }
        }
    }
}