class V1::EndpoindController < ApplicationController
    
    def show
        @info = Message.offset(rand(Message.count)).first   
        p @info     
        render json: { message: @info.name }
    end
end
