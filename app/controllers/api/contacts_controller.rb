module Api
  class ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :edit, :update, :destroy]

    respond_to :json

    def index
      @contacts = Contact.all

      respond_with @contacts
    end

    def show
      respond_with @contact
    end

    def new
      @contact = Contact.new
    end

    def edit
    end

    def create
      @contact = Contact.new(contact_params)

      respond_to do |format|
        if @contact.save
          format.json { render json: @contact, status: :created }
        else
          format.json { render json: @contact.errors, status: :unprocessable_entity }
        end
      end
    end

    def update
      @contact.update(contact_params)

      respond_with @contact
    end

    def destroy
      @contact.destroy

      respond_with @contact
    end

    private
      def set_contact
        @contact = Contact.find(params[:id])
      end

      def contact_params
        params.require(:contact).permit(:phone, :first_name, :last_name)
      end
  end
end
