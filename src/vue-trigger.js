var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    price: 60
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    capitalize: function() {
      this.firstName = this.firstName.toUpperCase();
    },
    double: function() {
      this.price = this.price * 2;
    }
  }
});

vm.capitalize();
vm.double();