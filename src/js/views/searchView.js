class SearchView {
    #parentEl = document.querySelector('.search');

    getQuery() {
        const query = this.#parentEl.querySelector('.search_field').value;
        this.#clearInput();
        return query;
    }

    #clearInput() {
        this.#parentEl.querySelector('.search_field').value = '';
    }

    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
};

export default new SearchView();